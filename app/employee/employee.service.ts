import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees;
private empcollection: AngularFirestoreCollection<any>;

constructor(private afs: AngularFirestore) {
this.empcollection = this.afs.collection('emp');
}
  addemployee(data) {
this.empcollection.add(data).then((res) => {
console.log('submitted response data is ' , res);
});
  }

//   getemployee() {
// this.afs.collection('emp').get().subscribe((res) => {
// console.log('get employees are' , res);
// res.forEach((doc) => {
// console.log(doc.data(), 'id', doc.id);
// this.employees = doc.data();
// });
// });
//   }



  getemployee(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afs.collection('emp')
        .snapshotChanges().subscribe(res => {
          const responseData: any = [];
          res.forEach(element => {
            const response: any = {};
            response['id'] = element.payload.doc.id;
            response['data'] = element.payload.doc.data();
            responseData.push(response);
          });
          // responseData = sortBy(responseData, 'data.insertedAt.seconds').reverse();
          resolve(responseData);
        }, error => {
          reject(error);
        });
    });
  }


  delete(id: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afs.collection('emp').doc(id).delete()
      // this.cardCollection.doc(id).update({ isDeleted: true })
      .then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }

  getById(id): Promise<any> {
   return new Promise((resolve, reject) => {
      this.empcollection.doc((id)).snapshotChanges().subscribe(res => {
        const responseData: any = [];
          const response: any = {};
          response['id'] = res.payload.id;
          response['data'] = res.payload.data();
          responseData.push(response);

        // console.log('getbyid', res);
        // const response: any = {};
        // response['id'] = res.payload.id;
        // response['data'] = res.payload.data();
        resolve(responseData);
      }, error => {
        reject(error);
      });
    });
  }



  updateemp(data: any): Promise<firebase.firestore.DocumentReference> {
    return new Promise((resolve, reject) => {
      this.afs.collection('emp', x => x
        .where('id', '==', data['id'])

      )
        .get()
        .subscribe(res => {
          if (data['id']) {
            if (!res.empty && res.docs[0].id !== data['id']) {
              reject({ message: 'category already used.' });
            } else {
              const updatedId = data['id'];
              delete data['id'];
              this.empcollection.doc(updatedId).update(data).then(() => {
                resolve();
              }).catch((err) => {
                reject(err);
              });
            }
          }
        });
    });
  }


}
