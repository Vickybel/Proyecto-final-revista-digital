from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    _tablename_ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    avatar = db.Column(db.String(200), default="sin-foto.png")
    premium = db.relationship("Premium", backref="users", uselist=False, lazy=True)
    admin = db.relationship("Admin", backref="users", uselist=False, lazy=True)

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
            "name": self.name,
            "last_name": self.last_name,
            "date": self.date,
            "avatar": self.avatar,
        }

class Invoice(db.Model):
    _tablename_ = 'invoices'
    id = db.Column(db.Integer, primary_key=True)
    email_paypal = db.Column(db.String(200), nullable=False)
    payment = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)  # fecha de pago
    validity = db.Column(db.String(200), nullable=False)# fecha de expiracion de pago
    premium = db.Column(db.Integer, db.ForeignKey("premiums.id"), nullable=False)

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
                "id": self.premiums.id,
                "status": self.premiums.status,
                "user": {
                "id": self.premiums.users.id,
                "email": self.premiums.users.email,
                "name": self.premiums.users.name,
                "last_name": self.premiums.users.last_name,
                "date": self.premiums.users.date,
                "avatar": self.premiums.users.avatar
                }
            }
        }

class Premium(db.Model):
    __tablename__ = 'premiums'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(200), nullable=False)
    transactions = db.Column(db.Integer, db.ForeignKey("invoices.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    magazine = db.relationship("Magazine", backref="premiums", uselist=False, lazy= True)

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
                "id": self.users.id,
                "email": self.users.email,
                "name": self.users.name,
                "last_name": self.users.last_name,
                "date": self.users.date,
                "avatar": self.users.avatar
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

class Admin(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    magazine = db.relationship("Magazines", backref="admin", uselist=False)
    banner = db.relationship("Banner", backref="admin", uselist=False)
    carousel = db.relationship("Carousel", backref="admin", uselist=False)

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
            "user_id": self.user_id,
        }


class Magazine(db.Model):
    __tablename__ = 'magazines'
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(200), nullable=False)
    glance = db.Column(db.String(200), nullable=False)  # portada
    premium_id = db.Column(db.Integer, db.ForeignKey(
        "premium.id"), nullable=False)
    admin_id = db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

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
            "premium_id": self.premium_ids
        }


class Carousel(db.Model):
    __tablename__ = 'carousels'
    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  # nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  # tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  # imagen carusel
    admin_id = db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

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
    admin_id = db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

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
