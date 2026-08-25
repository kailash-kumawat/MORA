# TODO: This is a separate python workers dir. and structure of this dir. will be,
# src/
# embedding.py       # calls embedding model
# clustering.py      # HDBSCAN logic
# consistency.py     # threshold-checking logic
# insight.py         # LLM call for insight generation
# db.py               # direct Postgres client (not Prisma)
# worker.py           # BullMQ/Redis job consumer