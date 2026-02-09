from fastapi import FastAPI
from  fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

facts = [
    {"id":1,
     "fact":"The Country with no mosquitos is France"},
     {"id":2,
      "fact":"Octopuses have three hearts and blue blood."},
      {"id":3,
       "fact":"Light from the Sun takes about 8 minutes to reach Earth."},
       {"id":4,
       "fact":"Butterflies taste with their feet."}
]

@app.get("/api/facts")
def get_facts():
    return facts