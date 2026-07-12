import http.server
import socketserver
import os

PORT = 80
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serveur démarré sur le port {PORT}")
    print(f"Dossier exposé: {os.getcwd()}")
    print(f"Accédez à http://localhost:{PORT}")
    httpd.serve_forever()
