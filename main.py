from flask import Flask, render_template


import random
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html" )
    #Work with templater Jinja2





    user = {'nickname': 'Ignat'}  # выдуманный пользователь
    # return '''
    # <html>
    #   <head>
    #     <title>Home Page</title>
    #     <style>
    #         h1 {
    #             color: red
    #         }
    #     </style>
    #   </head>
    #   <body>
    #     <h1>Hello, ''' + user['nickname'] + '''</h1>
    #   </body>
    # </html>
    # '''
    # url_for('static', filename='style.css')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=80)


