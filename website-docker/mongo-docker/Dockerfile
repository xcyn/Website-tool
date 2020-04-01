FROM mongo:3.4.7
RUN echo '开始构建.......'
COPY create-user.js /create-user.js
COPY seed-data.js /seed-data.js
COPY mongo-seed-start.sh /usr/local/bin/mongo-seed-start.sh
RUN chmod +x /usr/local/bin/mongo-seed-start.sh
RUN ln -s usr/local/bin/mongo-seed-start.sh /mongo-seed-start.sh # backwards compat

ENV MONGODB_URL="127.0.0.1:27017"
ENV DEFAULT_DB="website-docker"

ENTRYPOINT ["mongo-seed-start.sh"]
