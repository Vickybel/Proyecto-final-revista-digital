from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import expression
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    avatar = db.Column(db.String(200), default="sin-foto.png")
    premium = db.relationship("Premium", foreign_keys="Premium.user_id", backref="user", uselist=False, lazy=True)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "email": self.email,
            "passsword": self.password,
            "name": self.name,
            "last_name": self.last_name,
            "date": self.date,
            "avatar": self.avatar,
        }

class Premium(db.Model):
    __tablename__ = 'premiums'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(200), nullable=False)
    transactions = db.Column(db.Integer, db.ForeignKey("invoices.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    magazine = db.relationship("Magazine", backref="premium", uselist=False, lazy= True)
    transactions = db.relationship("Invoice", backref="premium", uselist=False, lazy= True)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "status": self.status,
            "user":{
                "id": self.user.id,
                "email": self.user.email,
                "name": self.user.name,
                "last_name": self.user.last_name,
                "date": self.user.date,
                "avatar": self.user.avatar
            }
        }

    def serialize_with_transactions_history(self):
        return{
            "id": self.id,
            "status": self.status,
            "user": self.users.id,
            "transactions": {
                "invoices_id": self.invoices.id,
                "email_paypal": self.invoices.email_paypal,
                "payment": self.invoices.payment,
                "date": self.invoices.date,
                "validity": self.invoices.validity
            }
        }


class Invoice(db.Model):
    _tablename_ = 'invoices'
    id = db.Column(db.Integer, primary_key=True)
    email_paypal = db.Column(db.String(200), nullable=False)
    payment = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)  # fecha de pago
    validity = db.Column(db.String(200), nullable=False)# fecha de expiracion de pago
    premium_id = db.Column(db.Integer, db.ForeignKey("premiums.id"), nullable=False)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "email_paypal": self.email_paypal,
            "payment": self.payment,
            "date": self.date,
            "validity": self.validity,
            "premium": {
                "id": self.premium.id,
                "status": self.premium.status,
                "user": {
                "id": self.premium.users.id,
                "email": self.premium.users.email,
                "name": self.premium.users.name,
                "last_name": self.premium.users.last_name,
                "date": self.premium.users.date,
                "avatar": self.premium.users.avatar
                }
            }
        }

class Admin(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.Integer, primary_key=True)
    magazine = db.relationship("Magazine", backref="admins", uselist=False)
    banner = db.relationship("Banner", backref="admins", uselist=False)
    carousel = db.relationship("Carousel", backref="admins", uselist=False)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
        }


class Magazine(db.Model):
    __tablename__ = 'magazines'
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(200), nullable=False)
    glance = db.Column(db.String(200), nullable=False)  # portada
    premium_id = db.Column(db.Integer, db.ForeignKey("premiums.id"), nullable=False)
    admin_id = db.Column(db.Integer, db.ForeignKey("admins.id"), nullable=False)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "user_type": self.user_type,
            "name": self.name,
            "date": self.date,
            "body": self.body,
            "glance": self.glance,
            "premium_id": self.premium_id
        }


class Carousel(db.Model):
    __tablename__ = 'carousels'
    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  # nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  # tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  # imagen carusel
    admin_id = db.Column(db.Integer, db.ForeignKey("admins.id"), nullable=False)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "admin_id": self.admin_id,
            "name": self.name,
            "size": self.size,
            "body": self.body
        }


class Banner(db.Model):
    __tablename__ = 'banners'
    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  # nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  # tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  # imagen banner
    admin_id = db.Column(db.Integer, db.ForeignKey("admins.id"), nullable=False)

    def save(self):
        db.session.add(self)  # INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit()  # UPDATE

    def delete(self):
        db.session.delete(self)  # DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "admin_id": self.admins.id,
            "name": self.name,
            "size": self.size,
            "body": self.body
        }
 