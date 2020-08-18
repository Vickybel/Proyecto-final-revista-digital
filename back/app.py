import os, datetime 
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify, request, render_template, send_from_directory, json
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from models import db, User, Premium, Invoice, Magazine, Admin, Carousel, Banner
from flask_bcrypt import Bcrypt
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
CORS(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
manager = Manager(app)
manager.add_command("db", MigrateCommand)  # init, migrate, upgrade

db.init_app(app)
Migrate(app, db)
CORS(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
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
            user = User.query.get(id)
            if user:
                return jsonify(user.serialize()), 200
            return jsonify({"msg": "User not found!"}), 404
        else:
            users = User.query.all()
            users = list(map(lambda user: user.serialize(), users))
            return jsonify(users), 200

    elif request.method == 'PUT':
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        user = User.query.get(id)
        user.email = email
        user.password = bcrypt.generate_password_hash(password)
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        user.avatar= request.json.get("avatar", "")
        user.update()
        return jsonify({'msg':'Actualizado correctamente'}), 200
    # https://www.free-css.com/assets/files/free-css-templates/preview/page254/auricle/
    elif request.method == 'DELETE':
        user = User.query.get(id)
        user.delete()
        return jsonify({'msg':'Borrado'}),200

    elif request.method == "POST":
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        if not email: 
            return jsonify({"msg": "Email is required"}), 400
        if not password: 
            return jsonify({"msg": "Password is required"}), 400 

        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({"msg": "User already exist"}), 
     
        user = User()
        user.email = request.json.get("email", "")
        user.password = bcrypt.generate_password_hash(password)
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        user.avatar= request.json.get("avatar", "")

        user.save()
        return jsonify(user.serialize()), 201
        
@app.route('/magazine', methods=['GET', 'POST'])
@app.route('/magazine/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
@jwt_required
def revista(id=None):
    if request.method == 'GET':
        if id is not None:
            magazine = Magazine.query.get(id)
            if magazine:
                return jsonify(magazine.serialize()), 200
            return jsonify({"msg": "Magazine not found!"}), 404
        else:
            magazines = Magazine.query.all()
            magazines = list(
                map(lambda magazine: magazine.serialize(), magazines))
            return jsonify(magazines), 200

    elif request.method == 'PUT':
        magazine = Magazine.query.get(id)
        magazine.user_type = request.json.get("user_type", "g")
        magazine.name = request.json.get("name", "g")
        magazine.date = request.json.get("date", "g")
        magazine.body = request.json.get("body", "g")
        magazine.glance = request.json.get("glance", "")
        magazine.premium_id= request.json.get("premium_id", "1")
        magazine.admin_id= request.json.get("admin_id", "1")
        magazine.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        magazine = Magazine.query.get(id)
        magazine.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":  
        magazine = Magazine()
        file = request.files['glance']
        document = request.files['body']

        if file.filename == '':
            return jsonify({"msg": "Not Selected File"}), 400
        if document.filename == '':
            return jsonify({"msg": "Not Selected File"}), 400

        if document and allowed_file(document.filename, ALLOWED_EXTENSIONS_FILES):
            
            email=get_jwt_identity()
            magazineId= Magazine.query.filter_by(id=id).first()
            
            if magazineId is not None:
                return jsonify({"msg" : "Este ID ya existe, intenta hacer post con uno distinto"})

            documentname = secure_filename(document.filename)
            documentname = "body_" + str(id) + "_" + documentname
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/documents", documentname))

        if file and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMGS):
            
            email=get_jwt_identity()
            magazineId= Magazine.query.filter_by(id=id).first()
            
            if magazineId is not None:
                return jsonify({"msg" : "Este ID ya existe, intenta hacer post con uno distinto"})

            filename = secure_filename(file.filename)
            filename = "glance_" + str(id) + "_" + filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/images", filename))

        magazine.user_type = request.form.get("user_type", "")
        magazine.name = request.form.get("name", "")
        magazine.date = request.form.get("date", "")
        magazine.body = documentname
        magazine.glance = filename
        magazine.premium_id = request.form.get("premium_id", "")
        magazine.admin_id = request.form.get("admin_id", "")

        if magazine.user_type == "":
            return jsonify({"msg": "user_type is required"}), 400
        if magazine.name == "":
            return jsonify({"msg": "name is required"}), 400
        if magazine.date == "":
            return jsonify({"msg": "date is required"}), 400
        if magazine.body == "":
            return jsonify({"msg": "body is required"}), 400

        magazine.save()
        return jsonify(magazine.serialize()), 201

@app.route('/carousel', methods=['GET', 'POST'])
@app.route('/carousel/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
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
        file = request.files['body']

        if file.filename == '':
            return jsonify({"msg": "Not Selected File"}), 400

        if file and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMGS):
            email=get_jwt_identity()
            carouselId= Carousel.query.filter_by(id=id).first()

            if carouselId is not None:
                return jsonify({"msg" : "Este ID ya existe, intenta hacer post con uno distinto"})

            filename = secure_filename(file.filename)
            filename = "carousel_" + str(id) + "_" + filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/images", filename))

        carousel.admin_id = request.form.get("admin_id", "")
        carousel.name = request.form.get("name", "")
        carousel.size = request.form.get("size", "")
        carousel.body = filename

        if carousel.admin_id == "":
            return jsonify({"msg": "admin is required"}), 400
        if carousel.name == "":
            return jsonify({"msg": "name is required"}), 400
        if carousel.size == "":
            return jsonify({"msg": "size is required"}), 400
        if carousel.body == "":
            return jsonify({"msg": "body is required"}), 400

        carousel.save()
        return jsonify(carousel.serialize()), 201

@app.route('/banner', methods=['GET', 'POST'])
@app.route('/banner/<int:id>', methods=['GET', 'POST', 'PUT', 'DELETE'])
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
        file = request.files['body']

        if file.filename == '':
            return jsonify({"msg": "Not Selected File"}), 400

        if file and allowed_file(file.filename, ALLOWED_EXTENSIONS_IMGS):
            email=get_jwt_identity()
            bannerId= Banner.query.filter_by(id=id).first()

            if bannerId is not None:
                return jsonify({"msg" : "Este ID ya existe, intenta hacer post con uno distinto"})

            filename = secure_filename(file.filename)
            filename = "banner_" + str(id) + "_" + filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER']+"/images", filename))

        banner.admin_id = request.form.get("admin_id", "")
        banner.name = request.form.get("name", "")
        banner.size = request.form.get("size", "")
        banner.body = filename
        banner.save()
        return jsonify(banner.serialize()), 201

@app.route('/premium', methods=['GET', 'POST'])
@app.route('/premium/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def premium(id=None):
    if request.method == 'GET':
        if id is not None:
            premium = Premium.query.get(id)
            if premium:
                return jsonify(premium.serialize()), 200
            return jsonify({"msg": "Premium not found!"}), 404
        else:
            premiums = Premium.query.all()
            premiums = list(
                map(lambda premium: premium.serialize(), premiums))
            return jsonify(premiums), 200

    elif request.method == 'PUT':
        premium = Premium.query.get(id)
        premium.user_id = request.json.get("user_id", "")
        premium.status = request.json.get("status", "")
        premium.transactions = request.json.get("transactions", "")
        premium.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        premium = Premium.query.get(id)
        premium.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST": 
        premium = Premium() 
        premium.user_id = request.json.get("user_id", "") 
        premium.status = request.json.get("status", "") 
        premium.save() 
        return jsonify(premium.serialize()), 201

@app.route('/invoices', methods=['GET', 'POST'])
@app.route('/invoices/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def invoices(id=None):
    if request.method == 'GET':
        if id is not None:
            invoice = Invoice.query.get(id)
            if invoice:
                return jsonify(invoice.serialize()), 200
            return jsonify({"msg": "This invoice not found!"}), 404
        else:
            invoices = Invoice.query.all()
            invoices = list(
                map(lambda invoice: invoice.serialize(), invoices))
            return jsonify(invoices), 200

    elif request.method == 'PUT':
        invoice = Invoice.query.get(id)
        invoice.email_paypal = request.json.get("email_paypal", "")
        invoice.payment = request.json.get("payment", "")
        invoice.date = request.json.get("date", "")
        invoice.validity = request.json.get("validity", "")
        invoice.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        invoice = Invoice.query.get(id)
        invoice.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST": 
        invoice = Invoice() 
        invoice.email_paypal = request.json.get("email_paypal", "") 
        invoice.payment = request.json.get("payment", "") 
        invoice.date = request.json.get("date", "") 
        invoice.validity = request.json.get("validity", "") 
        invoice.premium = request.json.get("premium", "") 
        invoice.save() 
        return jsonify(invoice.serialize()), 201

@app.route('/admin', methods=['GET', 'POST'])
@app.route('/admin/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def admin(id=None):
    if request.method == 'GET':
        if id is not None:
            admin = Admin.query.get(id)
            if admin:
                return jsonify(admin.serialize()), 200
            return jsonify({"msg": "This user not found!"}), 404
        else:
            admins = Admin.query.all()
            admins = list(
                map(lambda admin: admin.serialize(), admins))
            return jsonify(admins), 200

    elif request.method == 'PUT':
        admin = Admin.query.get(id)
        admin.user_id = request.json.get("user_id", "")
        admin.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        admin = Admin.query.get(id)
        admin.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":
        admin = Admin()
        admin.user_id = request.json.get("user_id", "")
        admin.save()
        return jsonify(admin.serialize()), 201

@app.route("/login", methods=['POST'])
def login_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email: 
        return jsonify({"msg": "Email is required"}), 400
    if not password: 
        return jsonify({"msg": "Password is required"}), 400 

    user = User.query.filter_by(email=email, active= True).first()
    
    if not user:
        return jsonify({"msg": "Email/Password are incorrect"})

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg": "Email/Password are incorrect"}) 

    expires= datetime.timedelta(days=7)

    data = {
        "acces_token": create_access_token(identity=user.email, expires_delta= expires),
        "user": user.serialize()
    }

    return jsonify({"Success": "Log In successfully!", "data": data }), 200


@app.route("/admin-login", methods=['POST'])
def login_admin():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email: 
        return jsonify({"msg": "Email is required"}), 400
    if not password: 
        return jsonify({"msg": "Password is required"}), 400 

    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({"msg": "Email/Password are incorrect"})

    if not user.admin:
        return jsonify({"msg": "Email/Password are incorrect"})

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg": "Email/Password are incorrect"}) 

    expires= datetime.timedelta(days=1)

    data = {
        "acces_token": create_access_token(identity=user.email, expires_delta= expires),
        "user": user.serialize()
    }

    return jsonify({"Success": "Log In successfully!", "data": data }), 200



if __name__ == "__main__":
    manager.run()
