import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from './postagem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url
  private url: string = "/posts"

  constructor(private http: HttpClient) { }
  //listar postagem
  listar(): Observable<Postagem[]>{
    console.log("")
    return this.http.get<Postagem[]>(this.url)
  }

  //Adicionar postagem
  adicionar(post: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(this.url, post)
  }

  //Alterar postagem
  alterar(post: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(this.url+"/"+ post.id, post)
  }

  //Remover postagem
  remover(id: number): Observable<Postagem>{
    return this.http.delete<Postagem>(this.url+"/"+id)
  }

}
