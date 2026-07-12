FROM python:3.11-slim

WORKDIR /app

COPY server.py /app/server.py
COPY . /app/

CMD ["python", "server.py"]
