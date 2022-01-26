import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import dotenv_values


class ManhwaDAO:
    def __init__(self):
        """ Creates a new ManhwaDAO instance

            Method reads all database details 
            from .env file
        """
        self.config = dotenv_values(".env")

    def create_connection(self):
        """Creates a new connection to database

           Method database credentials are fetched from self.config  
        """

        connection = psycopg2.connect(
            host=self.config["DB_HOST"],
            database=self.config["DB_DB"],
            user=self.config["DB_USER"],
            password=self.config["DB_PW"],
            cursor_factory=RealDictCursor
        )
        return connection

    def get_genres(self):
        """ Queries all genres """

        with (self.create_connection()) as connection:
            try:
                cursor = connection.cursor()
                cursor.execute('SELECT * FROM "public"."Genres"')

                genres = cursor.fetchall()
                return genres
            except(Exception, psycopg2.DatabaseError) as error:
                print(error)

    def get_manhwas(self):
        with (self.create_connection()) as connection:
            try:
                cursor = connection.cursor()
                cursor.execute('SELECT * FROM "public"."Manhwas"')

                manhwas = cursor.fetchall()
                return manhwas
            except(Exception, psycopg2.DatabaseError) as error:
                print(error)

    def get_manhwa_by_id(self, id):
        with (self.create_connection()) as connection:
            try:
                cursor = connection.cursor()
                cursor.execute(
                    'SELECT * FROM "public"."Manhwas" where "Id"= %s;', (str(id)))

                manhwa = cursor.fetchone()
                return manhwa
            except(Exception, psycopg2.DatabaseError) as error:
                print(error)
