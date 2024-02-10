import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(){}
  
  ngOnInit(): void {
    this.formPhotos = new FormGroup({
      fotoQuadrinho: new FormControl(null, [Validators.required]),
    }),
    this.formCreateLanche = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      quantPaginas: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required])
    })
  }

  get fotoQuadrinho() {
    return this.formPhotos.get('fotoQuadrinho')!;
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
  get quantidade() {
    return this.formCreateLanche.get('quantidade')!;
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
      this.formPhotos.get('fotoQuadrinho')!.invalid ||
      this.formCreateLanche.get('descricao')!.invalid ||
      this.formCreateLanche.get('valor')!.invalid ||
      this.formCreateLanche.get('quantPaginas')!.invalid ||
      this.formCreateLanche.get('tipo')!.invalid ||
      this.formCreateLanche.get('quantidade')!.invalid
    ) {
      return false;
    }
    this.formData.append('nome', this.formCreateLanche.get('nome')!.value);
    this.formData.append('descricao', this.formCreateLanche.get('descricao')!.value);
    this.formData.append('valor', this.formCreateLanche.get('valor')!.value);
    this.formData.append('quantPaginas', this.formCreateLanche.get('quantPaginas')!.value);
    this.formData.append('quantDispo', this.formCreateLanche.get('quantidade')!.value);
    this.formData.append('quantDispo', this.formCreateLanche.get('tipo')!.value);
    return true;
  }

  fileChangeEvent(event: any): void {
    this.file = event.target.files[0];
    this.formData.append('foto', this.file, this.formPhotos.get('fotoQuadrinho')!.value.nome);
  }

  createQ(){
    this.formData = new FormData();
    if(this.validateRegister()){
      console.log('deu certo');
      
      // this.spinner = false;
      // this.formData.append('foto', this.file, this.formPhotos.get('fotoQuadrinho')!.value.nome);
      // this.lanche.createLanche(this.formData).subscribe((Response: Lanche) => {
      //   if(Response.ok){
      //     this.fraseAlert = 'Lanche adicionado com sucesso'!;
      //     const alert = document.getElementById('Success');
      //     alert!.classList.remove('d-none');
      //     setTimeout(() => {
      //       alert!.classList.add('d-none');
      //     window.location.reload();
      //     }, 2000);
      //   }else{
      //     this.fraseAlert = Response.message!;
      //     const alert = document.getElementById('error');
      //     alert!.classList.remove('d-none');
      //     setTimeout(() => {
      //       alert!.classList.add('d-none');
      //     }, 4000);
      //   }
      //   this.spinner = true;
      //   this.modalRef.hide();
      // })
    }
    
  }
}
