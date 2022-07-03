all: clean build run

clean:
	npm --prefix zlatev-academy run clean
	rm -rf static index.html

build:
	npm --prefix zlatev-academy run build
	cp -r zlatev-academy/dist/* ./

run:
	npm --prefix zlatev-academy run start
