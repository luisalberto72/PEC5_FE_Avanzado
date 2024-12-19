import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // Obtener todos los posts
  getAllEntities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`).pipe(
      map((posts) =>
        posts.map((post: any) => ({
          id: post.id,
          title: post.title,
          imageUrl: `https://picsum.photos/id/${post.id}/200/300`, // Asignando una imagen fija basada en el ID
          shortDescription: post.body.slice(0, 100), // Descripción corta del post
        }))
      )
    );
  }

  // Obtener un post por ID
  getEntityById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`).pipe(
      map((post) => ({
        id: post.id,
        title: post.title,
        imageUrl: `https://picsum.photos/id/${post.id}/600/400`, // Imagen más grande basada en el ID
        description: post.body, // Descripción completa del post
      }))
    );
  }
}
