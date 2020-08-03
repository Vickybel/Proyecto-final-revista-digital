from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Users(db.Model):
    __tablename__= 'user'
    id= db.Column(db.Integer, primary_key = True)
    email= db.Column(db.String(200), nullable=False, unique=True )
    name= db.Column(db.String(200), nullable=False)
    last_name= db.Column(db.String(200), nullable=False)
    date= db.Column(db.String(200), nullable=False)
    avatar= db.Column(db.String(200), nullable=False)
    premium = db.relationship("Premium", backref="user", uselist=False)
    admin = db.relationship("Admin", backref="user", uselist=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "date": self.date,
            "avatar": self.avatar
        }

class Invoices(db.Model):
    __tablename__= 'invoice'
    id = db.Column(db.Integer, primary_key = True)
    email_paypal = db.Column(db.String(200), nullable=False)
    payment = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)    #fecha de pago
    validity = db.Column(db.String(200), nullable=False) #fecha de expiracion de pago
    premium = db.relationship("Premium", backref="invoice")

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "email_paypal": self.email_paypal,
            "payment": self.payment,
            "date": self.date,
            "validity": self.validity
        }

class Premium(db.Model): 
    __tablename__= 'premium'
    id= db.Column(db.Integer, primary_key = True)
    status= db.Column(db.String(200), nullable=False)
    transactions= db.Column(db.Integer, db.ForeignKey("invoice.id"), nullable=False)
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    magazine = db.relationship("Magazines", backref="premium", uselist=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "status": self.status,
        }

    def serialize_with_transactions_history(self):
            return{
                "id": self.id,
                "user_id": self.user_id,
                "status": self.status,
                "transactions": {
                    "invoices": self.transactions
                }
            }

class Admin(db.Model):
    __tablename__= 'admin'
    id= db.Column(db.Integer, primary_key = True)
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    magazine = db.relationship("Magazines", backref="admin", uselist=False)
    banner = db.relationship("Banner", backref="admin", uselist=False)
    carousel = db.relationship("Carousel", backref="admin", uselist=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
        }

class Magazines(db.Model):
    __tablename__= 'magazine'
    id = db.Column(db.Integer, primary_key = True)
    user_type = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(200), nullable=False)  
    glance = db.Column(db.String(200), nullable=False) #portada
    premium_id= db.Column(db.Integer, db.ForeignKey("premium.id"), nullable=False)
    admin_id= db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
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
    __tablename__= 'carousel'
    id = db.Column(db.Integer, primary_key = True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  #nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  #tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  #imagen carusel
    admin_id= db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
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
    __tablename__= 'banner'
    id = db.Column(db.Integer, primary_key = True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  #nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  #tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  #imagen banner
    admin_id= db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)

    def save(self):
        db.session.add(self) #INSERT INTO
        db.session.commit()

    def update(self):
        db.session.commit() #UPDATE
    
    def delete(self):
        db.session.delete(self) #DELETE FROM
        db.session.commit()

    def serialize(self):
        return{
            "id": self.id,
            "admin_id": self.admin_id,
            "name": self.name,
            "size": self.size,
            "body": self.body
        }
        