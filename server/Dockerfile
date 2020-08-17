
FROM python:3.7

COPY . /finance
WORKDIR /finance
RUN pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install --system --dev
