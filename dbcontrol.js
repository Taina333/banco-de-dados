import { sqlite } from 'sqlite3';
import { open } from 'sqlite'

async funtion criarTabela(login, senha){
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database
    });

    //Criação da criarTabela
    db.exec('CREATE TABLE IF NOT EXIST login
    (id INTEGER PRIMARY KEY AUTOINCREMENT, login VARCHAR, senha VARCHAR)');
}