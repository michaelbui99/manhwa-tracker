FROM python:3.10.2-slim-buster

WORKDIR /app

COPY ./src ./

# Installing dependencies
RUN apt-get update && apt-get install -y python3-psycopg2
RUN pip3 install beautifulsoup4
RUN pip3 install lxml
RUN pip3 install python-dotenv
RUN pip3 install requests
RUN pip3 install flask
RUN pip3 install flask_restful

ENTRYPOINT [ "python" ]
CMD ["main.py"]
