from flask import Flask, jsonify, request
from flask_script import Manager
from flask_cors import CORS

app = Flask (__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = True
app.config['ENV'] = 'development'

manager= Manager(app)

CORS(app)

@app.route('/', methods=['GET', 'POST'])
def main():
    return 'revista brutal', 201
@app.route('/test/<id>', methods=['GET', 'PUT', 'DELETE'])
def revista(id=None):
    if request.method=='GET':
        if id is not None: 
            return jsonify('Get con parametro')
    elif  id is None: 
            return jsonify('Get Id')
    elif request.method=='PUT':
        return jsonify('Esto es un Put')
    elif request.method=='DELETE':
        return jsonify('Esto es un Delete')


if __name__ == "__main__" : 
    app.run()