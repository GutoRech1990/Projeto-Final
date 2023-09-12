import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Postagem } from './postagem';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  //postagens
  public posts: Postagem[] = []

  //objeto postagem
  objetoPostagem = new Postagem

  constructor(private servico: ApiService) {}

  //quando implementamos o OnInit, a gente precisa ter a funcao ngOnInit
  ngOnInit() {
    this.selecionarPostagens()
  }

  salvarPostagem(){
    // chamo o update do BD passando o objeto que contem as alteracoes 
    this.servico.alterar(this.objetoPostagem)
      .subscribe(postagem => {
        for(let indice=0; indice<this.posts.length; indice++){
          if(this.posts[indice].id == postagem.id){
            this.posts[indice] = postagem;
            break;
          }
        }
      });
  }

  selecionarPostagens(){
    this.servico.listar()
      .subscribe(postagens => {this.posts = postagens})
  }

  cadastrarPostagem(){
    this.servico.adicionar(this.objetoPostagem)
      .subscribe(postagem =>{
        this.posts?.push(postagem)
      })
  }

  editarPostagem(id: any){
    let postagem = new Postagem
    for (let indice = 0; indice < this.posts.length; indice++){
      if (this.posts[indice].id == id){
        postagem = this.posts[indice]
        break
      }
    }
    let item:Postagem = {
      id: postagem.id,
      titulo: postagem.titulo,
      conteudo: postagem.conteudo
    }
    this.objetoPostagem = item

  }

  
  removerPostagem(id: any){
      this.servico.remover(id).subscribe(postagem=>{
        for(let indice=0;indice<this.posts.length;indice++){
          if (this.posts[indice].id == id){
            this.posts.splice(indice,1)
            break
          }
        }
      })
    }

}



