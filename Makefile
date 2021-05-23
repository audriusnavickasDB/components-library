pack:
	@npm run clean:components; npm run build:components; rm -rf dist; mkdir dist; npm pack; mv *.tgz dist;