FROM golang:alpine3.10 AS builder

WORKDIR /usr/app

COPY . .

RUN go build -ldflags "-s -w"

FROM scratch
WORKDIR /usr/app
COPY --from=builder /usr/app .

CMD [ "./app" ]