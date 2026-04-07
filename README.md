# Markdown Note-taking API

Simple Markdown Note-taking API built with Node.js, Express, and TypeScript.

---

## Features

- Create, update, delete notes
- Markdown to HTML rendering
- Grammar check
- In-memory storage

---

## Setup

git clone https://github.com/mykytapilec/note-taking-ppp.git
cd note-taking-ppp
npm install
npm run dev

Server: http://localhost:3000

---

## API

Create:
curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"content":"# Hello"}'

Get all:
curl http://localhost:3000/notes

Get one:
curl http://localhost:3000/notes/ID

Update:
curl -X PUT http://localhost:3000/notes/ID -H "Content-Type: application/json" -d '{"content":"# Updated"}'

Delete:
curl -X DELETE http://localhost:3000/notes/ID

HTML:
curl http://localhost:3000/notes/ID/html

Grammar:
curl http://localhost:3000/notes/ID/grammar

---

## Notes

- Data resets on restart
- Grammar works best for English

---

## Project

https://roadmap.sh/projects/markdown-note-taking-app