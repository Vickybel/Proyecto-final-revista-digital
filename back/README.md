# Para iniciar el backend del proyecto

   # 1 Posicionarse en la carpeta back
    $ cd \Users\nicol\OneDrive\Escritorio\revista_brutal\Proyecto-final-revista-digital\back

   # 2 Iniciar/Crear entorno virtual
    $ pipenv shell

   # 3 Instalar las dependencias necesarias
    $ pipenv install

   # 4 Levantar servidor
    $ pipenv run start
    O
    $ python app.py runserver

-----------------------------------------------------------------------------

# comandos base de datos

   ## solo la primera vez
    python app.py db init

   # generar archivo de migraciones database.db
    $ python app.py db migrate

   # hacer migracion a basa de datos
    $ python app.py db upgrade


-----------------------------------------------------------

# Copias
