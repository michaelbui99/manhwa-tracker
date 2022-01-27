FROM python:3.10.2-alpine3.14

WORKDIR /app

COPY ./src ./

# Installing dependencies
RUN pip3 install beautifulsoup4
RUN pip3 install lxml
RUN pip3 install psychopg2
RUN pip3 install python-dotenv
RUN pip3 install requests
RUN pip3 install flask
RUN pip3 install flask_restful

CMD ["python3", "main.py"]
