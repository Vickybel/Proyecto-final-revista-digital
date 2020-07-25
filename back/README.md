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
