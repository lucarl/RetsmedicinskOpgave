from flask import Flask, jsonify
from person import Person

app = Flask(__name__)

@app.route('/data')
def get_data():
    people = [
        Person('Emil', 25, 'Vesterbrogade 85, 1620 København V', 'emil@example.com', '+45 20 12 34 56', 'Udvikler'),
        Person('Sofie', 30, 'Østerbrogade 108, 2100 København Ø', 'sofie@example.com', '+45 40 56 78 90', 'Systemadministrator'),
        Person('Frederik', 35, 'Frederiksberg Allé 27, 1820 Frederiksberg C', 'frederik@example.com', '+45 50 23 45 67', 'UX-designer')
    ]
    data = [p.__dict__ for p in people]
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=8000)

