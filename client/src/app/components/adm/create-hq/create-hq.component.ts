import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quadrinho } from 'src/app/interfaces/quadrinho';
import { QuadrinhoService } from 'src/app/services/quadrinho.service';

@Component({
  selector: 'app-create-hq',
  templateUrl: './create-hq.component.html',
  styleUrls: ['./create-hq.component.css']
})
export class CreateHQComponent implements OnInit{
  file: any;
  spinner: boolean = true;
  formCreateLanche!: FormGroup
  formPhotos!: FormGroup
  formData = new FormData();
  fraseAlert: string = '';

  constructor(private quadrinho: QuadrinhoService){}
  
  ngOnInit(): void {
    this.formPhotos = new FormGroup({
      foto: new FormControl(null, [Validators.required]),
    }),
    this.formCreateLanche = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      quantPaginas: new FormControl('', [Validators.required]),
      quantDispo: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required])
    })
  }

  get foto() {
    return this.formPhotos.get('foto')!;
  }
  get nome() {
    return this.formCreateLanche.get('nome')!;
  }
  get descricao() {
    return this.formCreateLanche.get('descricao')!;
  }
  get valor() {
    return this.formCreateLanche.get('valor')!;
  }
  get quantDispo() {
    return this.formCreateLanche.get('quantDispo')!;
  }
  get quantPaginas(){
    return this.formCreateLanche.get('quantPaginas')!;
  }
  get tipo(){
    return this.formCreateLanche.get('tipo')!;
  }

  validateRegister() {
    if (
      this.formCreateLanche.get('nome')!.invalid ||
      this.formPhotos.get('foto')!.invalid ||
      this.formCreateLanche.get('descricao')!.invalid ||
      this.formCreateLanche.get('valor')!.invalid ||
      this.formCreateLanche.get('quantPaginas')!.invalid ||
      this.formCreateLanche.get('tipo')!.invalid ||
      this.formCreateLanche.get('quantDispo')!.invalid
    ) {
      return false;
    }
    this.formData.append('nome', this.formCreateLanche.get('nome')!.value);
    this.formData.append('descricao', this.formCreateLanche.get('descricao')!.value);
    this.formData.append('valor', this.formCreateLanche.get('valor')!.value);
    this.formData.append('quantPaginas', this.formCreateLanche.get('quantPaginas')!.value);
    this.formData.append('quantDispo', this.formCreateLanche.get('quantDispo')!.value);
    this.formData.append('tipo', this.formCreateLanche.get('tipo')!.value);
    return true;
  }

  fileChangeEvent(event: any): void {
    this.file = event.target.files[0];
    this.formData.append('foto', this.file, this.formPhotos.get('foto')!.value.nome);
  }

  createQ(){
    this.formData = new FormData();
    if(this.validateRegister()){
      this.spinner = false;
      this.formData.append('foto', this.file, this.formPhotos.get('foto')!.value.nome);
      this.quadrinho.createQuadrinho(this.formData).subscribe((Response: Quadrinho) => {
        if(Response.ok){
          this.formData = new FormData();
          this.formCreateLanche.reset();
          this.formPhotos.reset();
          this.fraseAlert = 'Quadrinho adicionado com sucesso'!;
          const alert = document.getElementById('true');
          alert!.classList.remove('d-none');
          setTimeout(() => {
            alert!.classList.add('d-none')}, 2000);
        }else{
          this.fraseAlert = Response.message;
          const alert = document.getElementById('false');
          alert!.classList.remove('d-none');
          setTimeout(() => {
            alert!.classList.add('d-none');
          }, 4000);
        }
        this.spinner = true;
      })
    }
    
  }
}
