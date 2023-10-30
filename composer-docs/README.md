# Composer API Documentation

This directory contains API documentation for [Composer](https://github.com/composer/composer), generated using the following tools:

## [ApiGen](apigen)

```sh
# Download ApiGen
$ curl -L https://github.com/ApiGen/ApiGen/releases/latest/download/apigen.phar -o apigen.phar

# Run ApiGen on composer/src
$ php apigen.phar composer/src --output composer-docs/apigen
```

## [Doctum](doctum)

```sh
# Download Doctum
$ curl -O https://doctum.long-term.support/releases/latest/doctum.phar

# Create a basic Doctum config file
$ echo "<?php return new Doctum\Doctum(__DIR__ . '/src');" > composer/doctum.php

# Run Doctum on composer/src
$ php doctum.phar update composer/doctum.php
```

## [phpDocumentor](phpdocumentor)

```sh
# Download PHPDocumentor
$ wget https://phpdoc.org/phpDocumentor.phar

# Run phpDocumentor on composer/src
$ php ./phpDocumentor.phar run -d composer/src -t composer-docs/phpdocumentor
```
