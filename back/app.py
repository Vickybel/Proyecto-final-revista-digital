from flask import Flask, jsonify, request, render_template
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
    return render_template('index.html')

@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def usuario(id=None):
    if request.method=='GET':
        if id is not None: 
            user = Users.query.get(id)
            if user:
                return jsonify(user.serialize()), 200
            return jsonify({"msg" : "User not found!"}), 404
        else: 
            users = Users.query.all()
            users = list(map(lambda user: user.serialize(), users))
            return jsonify(users),200

    elif request.method=='PUT': 
        return jsonify('Esto es un Put'),200

    elif request.method=='DELETE':
        return jsonify('Esto es un Delete'),200
    
    elif request.method=="POST":
        user = Users()
        user.email =  request.json.get("email", "")
        user.name =  request.json.get("name", "")
        user.last_name =  request.json.get("last_name", "")
        user.date =  request.json.get("date", "")
        premium= Premium()
        premium.history = "activo"
        premium.status = True
        user.premium = premium
        user.save()
        return jsonify(user.serialize()), 201

@app.route('/magazine', methods=['GET', 'POST'])
@app.route('/magazine/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def revista(id=None):
    if request.method=='GET':
        if id is not None: 
            magazine = Magazines.query.get(id)
            if user:
                return jsonify(magazine.serialize()), 200
            return jsonify({"msg" : "User not found!"}), 404
        else: 
            magazines = Magazines.query.all()
            magazines = list(map(lambda magazine: magazine.serialize(), magazines))
            return jsonify(magazines),200

    elif request.method=='PUT': 
        return jsonify('Esto es un Put'),200

    elif request.method=='DELETE':
        return jsonify('Esto es un Delete'),200
    
    elif request.method=="POST":
        magazine = Magazines()
        magazine.user_type =  request.json.get("user_type", "")
        magazine.name =  request.json.get("name", "")
        magazine.date =  request.json.get("date", "")
        magazine.body =  request.json.get("body", "")
        magazine.glance =  request.json.get("glance", "")        
        magazine.save()
        return jsonify(magazine.serialize()), 201



if __name__ == "__main__" : 
    manager.run()