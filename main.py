import psycopg2
import anvil.server

anvil.server.connect("RF76OLM6BUKQZFEZXOSGMMNR-YU2HXYOZY4XXCSYD")
#anvil.server.connect("E476RXP5MLQZGS225E4XKQCP-IXAFNMOLABW6NMGM") #html Dashboard


@anvil.server.http_endpoint('/test')
def test():
    return {'Hello': 'hello'}


conn = psycopg2.connect(
    host='localhost',
    user='postgres',
    password='passwordpsql'
)

conn.set_session(autocommit=True)

cur = conn.cursor()


@anvil.server.http_endpoint('/db/:db')
def get_all_items(db):
    cur.execute(f'SELECT * FROM {db}')
    items = cur.fetchall()
    return [
        {'id': item[0], 'invest': float(item[1])}
        for item in items
    ]


@anvil.server.http_endpoint('/db/last/:db')
def get_last_item(db):
    cur.execute(f''' 
    SELECT id, invest from {db}
    ORDER BY id DESC 
    LIMIT 1
    ''') #ohne limit cur.fetchone() gibt erstes item
    items = cur.fetchall()
    return {'item': float(item[1])
            for item in items}


@anvil.server.callable
def get_items(db):
    cur.execute(f'SELECT * FROM {db}')
    items = cur.fetchall()
    return [
        {'id': item[0], 'invest': float(item[1])}
        for item in items
    ]


@anvil.server.callable
def get_last_2_items(db):
    cur.execute(f'''
    SELECT id, invest from {db}
    ORDER BY id DESC 
    LIMIT 2''')
    items = cur.fetchall()
    return [float(item[1])
            for item in items]


@anvil.server.callable
def get_last_item(db):
    cur.execute(f''' 
    SELECT id, invest from {db}
    ORDER BY id DESC 
    LIMIT 1
    ''') #ohne limit cur.fetchone() gibt erstes item
    items = cur.fetchall()
    return [float(item[1])
            for item in items]



anvil.server.wait_forever()
