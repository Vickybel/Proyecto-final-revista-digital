from flask import Flask, jsonify, request
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from models import db, Users, Premium, Invoices, Magazines


app = Flask (__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"

db.init_app(app)
Migrate(app, db)
manager= Manager(app)
manager.add_command("db", MigrateCommand) # init, migrate, upgrade

CORS(app)

@app.route('/', methods=['GET', 'POST'])
def main():
    return jsonify('Esto es un Get')

@app.route('/test', methods=['GET', 'POST'])
@app.route('/test/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def revista(id=None):
    if request.method=='GET':
        if id is not None: 
            return jsonify('Get con parametro'),200
        else: 
            return jsonify('Get all'),200

    elif request.method=='PUT': 
        return jsonify('Esto es un Put'),200

    elif request.method=='DELETE':
        return jsonify('Esto es un Delete'),200
    
    elif request.method=="POST":
        user = Users()
        user.email =  request.json.POST("email", "")
        user.name =  request.json.POST("email", "")
        user.last_name =  request.json.POST("email", "")
        user.date =  request.json.POST("email", "")
        return jsonify("email.serialize")


if __name__ == "__main__" : 
    manager.run()