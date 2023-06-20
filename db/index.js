import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('media.db');

export const init =() =>{
    const promise = new Promise((resolve, reject)=> {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists media (id integer primary key not null, title text not null, image text not null);',
            [], ()=>{
                resolve();
            }, 
            (_, err) =>{
                reject(err)
            })
        })
    }) 
    return promise;
};

export const insertAddress = (title, image)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction(tx => {
            tx.executeSql(
                'insert into media (title, image) VALUES (?, ?);',
            [title, image],
            (_, result) => resolve(result),
            (_, err) =>reject(err)
            );
        })
    })
    return promise;
};

export const fetchAddress = ()=>{
    const promise = new Promise((resolve, reject) =>{
        db.transaction(tx =>{
            tx.executeSql('SELECT * FROM media',
            [],
            (_, result)=> resolve(result),
            (_, err)=> reject(err)
            );
        })
    })
    return promise;
}


