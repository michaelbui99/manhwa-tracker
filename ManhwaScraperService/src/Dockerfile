FROM python:3.10.2-alpine3.14

WORKDIR /app

COPY . ./

# Installing dependencies
RUN pip3 install beautifulsoup4
RUN pip3 install lxml
RUN pip3 install psychopg2
RUN pip3 install python-dotenv
RUN pip3 install requests

CMD ["python3", "main.py"]
