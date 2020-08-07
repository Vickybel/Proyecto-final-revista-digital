import os, datetime 
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify, request, render_template, send_from_directory, json
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from models import db, Users, Premium, Invoices, Magazines, Admin, Carousel, Banner
#from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from libs.utils import allowed_file

UPLOAD_FOLDER = "static"
ALLOWED_EXTENSIONS_IMGS = {'png', 'jpg', 'jpeg', 'gif'}
ALLOWED_EXTENSIONS_FILES = {'pdf', 'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['JWT_SECRET_KEY'] = 'secret-key'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db.init_app(app)
Migrate(app, db)
manager = Manager(app)
manager.add_command("db", MigrateCommand)  # init, migrate, upgrade

db.init_app(app)
Migrate(app, db)
CORS(app)
jwt = JWTManager(app)
# bcrypt = Bcrypt(app)
manager = Manager(app)
manager.add_command("db", MigrateCommand)

@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('index.html')


@app.route('/users', methods=['GET', 'POST'])
@app.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def usuario(id=None):
    if request.method == 'GET':
        if id is not None:
            user = Users.query.get(id)
            if user:
                return jsonify(user.serialize()), 200
            return jsonify({"msg": "User not found!"}), 404
        else:
            users = Users.query.all()
            users = list(map(lambda user: user.serialize(), users))
            return jsonify(users), 200

    elif request.method == 'PUT':
        user = Users.query.get(id)
        user.email = request.json.get("email", "")
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        premium = Premium()
        premium.history = "activo"
        premium.status = True
        user.premium = premium
        user.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        user = Users.query.get(id)
        user.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":
        user = Users()
        user.email = request.json.get("email", "")
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        premium = Premium()
        premium.history = "activo"
        premium.status = True
        user.premium = premium
        user.save()
        return jsonify(user.serialize()), 201


@jwt_required
@app.route('/magazine', methods=['GET', 'POST'])
@app.route('/magazine/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def revista(id=None):
    if request.method == 'GET':
        if id is not None:
            magazine = Magazines.query.get(id)
            if magazine:
                return jsonify(magazine.serialize()), 200
            return jsonify({"msg": "Magazine not found!"}), 404
        else:
            magazines = Magazines.query.all()
            magazines = list(
                map(lambda magazine: magazine.serialize(), magazines))
            return jsonify(magazines), 200

    elif request.method == 'PUT':
        magazine = Magazines.query.get(id)
        magazine.user_type = request.json.get("user_type", "")
        magazine.name = request.json.get("name", "")
        magazine.date = request.json.get("date", "")
        magazine.body = request.json.get("body", "")
        magazine.glance = request.json.get("glance", "")
        magazine.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        magazine = Magazines.query.get(id)
        magazine.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":  
        file = request.files['glance']

        if file.filename == '':
            return jsonify({"msg": "Not Selected File"}), 400

        magazine = Magazines()
        
        if file and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMGS):
            filename = secure_filename(file.filename)
            filename = "glance_" + str(magazine.id) + "_" + filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/images", filename))
       

        magazine.user_type = request.form.get("user_type", "")
        magazine.name = request.form.get("name", "")
        magazine.date = request.form.get("date", "")
        magazine.body = request.form.get("body", "")
        magazine.glance = request.form.get("glance", "")

        if magazine.user_type == "":
            return jsonify({"msg": "user_type is required"}), 400
        if magazine.name == "":
            return jsonify({"msg": "name is required"}), 400
        if magazine.date == "":
            return jsonify({"msg": "date is required"}), 400
        if magazine.body == "":
            return jsonify({"msg": "body is required"}), 400
        
        magazine.save()
        return jsonify({"success": "Glance add successfully!", "magazine": magazine.serialize()}), 201

@app.route('/carousel', methods=['GET', 'POST'])
@app.route('/carousel/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def carousel(id=None):
    if request.method == 'GET':
        if id is not None:
            carousel = Carousel.query.get(id)
            if carousel:
                return jsonify(carousel.serialize()), 200
            return jsonify({"msg": "Image not found!"}), 404
        else:
            carousels = Carousel.query.all()
            carousels = list(
                map(lambda carousel: carousel.serialize(), carousels))
            return jsonify(carousels), 200

    elif request.method == 'PUT':
        carousel = Carousel.query.get(id)
        carousel.admin_id = request.json.get("admin_id", "")
        carousel.name = request.json.get("name", "")
        carousel.size = request.json.get("size", "")
        carousel.body = request.json.get("body", "")
        carousel.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        carousel = Carousel.query.get(id)
        carousel.delete()
        return jsonify('Borrado'),200
       

    elif request.method == "POST":
        carousel = Carousel()
        carousel.admin_id = request.json.get("admin_id", "")
        carousel.name = request.json.get("name", "")
        carousel.size = request.json.get("size", "")
        carousel.body = request.json.get("body", "")
        carousel.save()
        return jsonify(carousel.serialize()), 201

@app.route('/banner', methods=['GET', 'POST'])
@app.route('/banner/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def banner(id=None):
    if request.method == 'GET':
        if id is not None:
            banner = Banner.query.get(id)
            if banner:
                return jsonify(banner.serialize()), 200
            return jsonify({"msg": "Image not found!"}), 404
        else:
            banners = Banner.query.all()
            banners = list(
                map(lambda banner: banner.serialize(), banners))
            return jsonify(banners), 200

    elif request.method == 'PUT':
        banner = Banner.query.get(id)
        banner.admin_id = request.json.get("admin_id", "")
        banner.name = request.json.get("name", "")
        banner.size = request.json.get("size", "")
        banner.body = request.json.get("body", "")
        banner.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        banner = Banner.query.get(id)
        banner.delete()
        return jsonify('Borrado'),200
       

    elif request.method == "POST":
        banner = Banner()
        banner.admin_id = request.json.get("admin_id", "")
        banner.name = request.json.get("name", "")
        banner.size = request.json.get("size", "")
        banner.body = request.json.get("body", "")
        banner.save()
        return jsonify(banner.serialize()), 201


if __name__ == "__main__":
    manager.run()
