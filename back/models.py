from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Users(db.Model):
    __tablename__= 'user'
    id= db.Column(db.Integer, primary_key = True)
    email= db.Column(db.String(200), nullable=False, unique=True )
    name= db.Column(db.String(200), nullable=False)
    last_name= db.Column(db.String(200), nullable=False)
    date= db.Column(db.String(200), nullable=False)
    premium = db.relationship("Premium", backref="user", uselist=False)


    
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
            "premium": self.premium.serialize()
        }


class Premium(db.Model):
    __tablename__= 'premium'
    id= db.Column(db.Integer, primary_key = True)
    status= db.Column(db.String(200), nullable=False)
    history= db.Column(db.String(200))
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

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
            "history": self.history
        }

class Invoices(db.Model):
    __tablename__= 'invoice'
    id = db.Column(db.Integer, primary_key = True)
    email_paypal = db.Column(db.String(200), nullable=False)
    payment = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)    #fecha de pago
    validity = db.Column(db.String(200), nullable=False) #fecha de expiracion de pago

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

class Magazines(db.Model):
    __tablename__= 'magazine'
    id = db.Column(db.Integer, primary_key = True)
    user_type = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(200), nullable=False)  
    glance = db.Column(db.String(200), nullable=False) #portada

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
            "glance": self.glance
        }

class Admin(db.Model):
    __tablename__= 'admin'
    id= db.Column(db.Integer, primary_key = True)
    user_id= db.Column(db.String(200), nullable=False, unique=True )

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
        }

class Carousel(db.Model):
    __tablename__= 'carousel'
    id = db.Column(db.Integer, primary_key = True)
    admin_id = db.Column(db.String(200), nullable=False)
    name = db.Column(db.String(200), nullable=False)  #nombre de la imagen
    size = db.Column(db.String(200), nullable=False)  #tamaño de la imagen
    body = db.Column(db.String(100), nullable=False)  #imagen carusel

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
        