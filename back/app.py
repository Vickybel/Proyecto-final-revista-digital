from flask import Flask, jsonify, request, render_template, json
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from models import db, User, Premium, Invoice, Magazine, Admin, Carousel, Banner

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"

db.init_app(app)
Migrate(app, db)
manager = Manager(app)
manager.add_command("db", MigrateCommand)  # init, migrate, upgrade

CORS(app)

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
        user = User.query.get(id)
        user.email = request.json.get("email", "")
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        user.avatar= request.json.get("avatar", "")
        # premium = Premium()
        # premium.history = "activo"
        # premium.status = True
        # user.premium = premium
        user.update()
        return jsonify('Actualizado correctamente'), 200
# https://www.free-css.com/assets/files/free-css-templates/preview/page254/auricle/
    elif request.method == 'DELETE':
        user = User.query.get(id)
        user.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":
        user = User()
        user.email = request.json.get("email", "")
        user.name = request.json.get("name", "")
        user.last_name = request.json.get("last_name", "")
        user.date = request.json.get("date", "")
        user.avatar= request.json.get("avatar", "")
        # premium = Premium()
        # premium.history = "activo"
        # premium.status = True
        # user.premium = premium
        user.save()
        return jsonify(user.serialize()), 201

@app.route('/magazine', methods=['GET', 'POST'])
@app.route('/magazine/<int:id>', methods=['GET', 'PUT', 'DELETE'])
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
        magazine.user_type = request.json.get("user_type", "")
        magazine.name = request.json.get("name", "")
        magazine.date = request.json.get("date", "")
        magazine.body = request.json.get("body", "")
        magazine.glance = request.json.get("glance", "")
        magazine.premium_id= request.json.get("premium_id", "")
        magazine.update()
        return jsonify('Actualizado correctamente'), 200

    elif request.method == 'DELETE':
        magazine = Magazine.query.get(id)
        magazine.delete()
        return jsonify('Borrado'),200

    elif request.method == "POST":
        magazine = Magazine()
        magazine.user_type = request.json.get("user_type", "")
        magazine.name = request.json.get("name", "")
        magazine.date = request.json.get("date", "")
        magazine.body = request.json.get("body", "")
        magazine.glance = request.json.get("glance", "")
        magazine.save()
        return jsonify(magazine.serialize()), 201

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
                map(lambda premium: premium.serialize_with_transactions_history(), premiums))
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

@app.   route('/invoices', methods=['GET', 'POST'])
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

if __name__ == "__main__":
    manager.run()
