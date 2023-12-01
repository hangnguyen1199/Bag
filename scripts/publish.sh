#!/usr/bin/env bash

# Build variables.
export ENVIRONMENT=production

# Deployment variables.
export SERVER_HOST=167.179.95.197
export SERVER_DIR=/home/vnbro.com/web/seeding.vnbro.com/public_html/wbag
export SERVER_USER=root


# Build app.
echo "Building the production build for the app...."
    npm run build --scripts-prepend-node-path &&
    echo "Production build for the app built!" &&
    echo "Uploading files to web server..." &&
    echo 'put -r demo/*' | sftp $SERVER_USER@$SERVER_HOST:$SERVER_DIR &&
    echo "Uploaded files to web server!"  