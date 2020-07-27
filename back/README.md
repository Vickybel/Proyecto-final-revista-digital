# comandos base de datos
   ## solo la primera vez
    python app.py db init

   # generar archivo de migraciones database.db
    $ python app.py db migrate

   # hacer migracion a basa de datos
    $ python app.py db upgrade

----------------------------------------------------
Usuario
-
Id PK
correo VARCHAR(200)
password VARCHAR(200)
nombre STRING
apellido STRING
fecha_nacimiento date
imagen VARBINARY


Membresia
-
id pk 
user.id fk - Usuario.id
status BOOLEAN
historial OBJ fk -< Factura

Factura
-
id pk
correo VARCHAR(200)_paypal
pago  price
fecha date 
vigencia date

Revista
--------
Id PK
nombre STRING
fecha DATE
cuerpo VARBINARY
portada VARBINARY

Ediciones
----------
Id PK
revista OBJ fk -< Revista
-----------------------------------------------------------------------------


from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

​

​

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)

    lastname = db.Column(db.String(100), nullable=False)

    email = db.Column(db.String(100), nullable=False, unique=True)

    address_work = db.Column(db.String(100), nullable=False)

    address_home = db.Column(db.String(100), nullable=False)

    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"), nullable=False)

    posts = db.relationship("Post", backref="user", uselist=False)

​

    def serialize(self):

        return {

            "id": self.id,

            "name": self.name,

            "lastname": self.lastname,

            "email": self.email,

            "address_work": self.address_work,

            "address_home": self.address_home,

            "role": self.role.serialize()

        }

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class Role(dn.Model):

    __tablename__ = "roles"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False, unique=True)

    users = db.relationship("User", backref="role", uselist=False)

​

    def serialize(self):

        return {

            "id": self.id,

            "name": self.name,

        }

​

    def serialize_with_users(self):

        users = list(map(lambda user: user.serialie(), self.users))

        return {

            "id": self.id,

            "name": self.name,

            "users": users

        }

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class RoleUser(dn.Model):

    __tablename__ = "roles_users"

    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class Post(dn.Model):

    __tablename__ = "posts"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100), nullable=False, unique=True)

    slug = db.Column(db.String(100), nullable=False, unique=True)

    resume = db.Column(db.String(100), nullable=False)

    body = db.Column(db.String, nullable=False)

    date = db.Column(db.DateTime, nullable=False)

    status = db.Column(db.Boolean, default=True)

    has_comments = db.Column(db.Boolean, default=True)

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    rankings = db.relationship("RankingPost", backref="post", uselist=False)

​

    def serialize(self):

        suma = 0

        for rank in self.rankings:

            suma = suma + rank.ranking

​

        total = suma / len(self.rankings)

​

        return {

            "id": self.id,

            "title": self.title,

            "slug": self.slug,

            "resume": self.resume,

            "body": self.body,

            "date": self.date,

            "status": self.status,

            "has_comment": self.has_comments,

            "user": self.user.serialize(),

            "total_puntaje": total

        }

​

    '''

        {

            "id": self.id,

            "title": self.title,

            "slug": self.slug,

            "resume": self.resume,

            "body": self.body,

            "date": self.date,

            "status": self.status,

            "has_comment": self.has_comments,

            "user": {

                "id": self.id,

                "name": self.name,

                "lastname": self.lastname,

                "email": self.email,

                "address_work": self.address_work,

                "address_home": self.address_home,

                "role": {

                    "id": self.id,

                    "name": self.name,

                }

            },

            "total_puntaje": 5

        }

​

    '''

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class RankingPost(db.Model):

    __tablename__ = "ranking_posts"

    id = db.Column(db.Integer, primary_key=True)

    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)

    ranking = db.Column(db.Integer, nullable=False)

​

class Comment(dn.Model):

    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class Multimedia(dn.Model):

    __tablename__ = "multimedias"

    id = db.Column(db.Integer, primary_key=True)

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()

​

​

class RePost(dn.Model):

    __tablename__ = "reposts"

    id = db.Column(db.Integer, primary_key=True)

​

    def save(self):

        db.session.add(self)

        db.session.commit()

    

    def update(self):

        db.session.commit()

​

    def delete(self):

        db.session.delete(self)

        db.session.commit()