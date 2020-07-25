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
            "date": self.date
        }


class Premium(db.Model):
    __tablename__= 'premium'
    id= db.Column(db.Integer, primary_key = True)
    user_id= db.Column(db.String(200), nullable=False, unique=True )
    status= db.Column(db.String(200), nullable=False)
    history= db.Column(db.String(200))
    user = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)

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
            "user_id": self.user.id,
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
    name = db.Column(db.String(200), nullable=False)
    date = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(200), nullable=False)    #fecha de pago
    glance = db.Column(db.String(200), nullable=False) #fecha de expiracion de pago

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
            "name": self.name,
            "date": self.date,
            "body": self.body,
            "glance": self.glance
        }