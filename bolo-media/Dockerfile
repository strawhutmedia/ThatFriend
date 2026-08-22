# Static file server for the Bolo Media site (used by Railway).
FROM caddy:2-alpine
COPY . /site
# Railway injects PORT; default to 80 for local runs.
CMD ["sh", "-c", "caddy file-server --root /site --listen :${PORT:-80}"]
