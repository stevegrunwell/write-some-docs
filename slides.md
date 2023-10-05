<!-- .slide: class="has-background-image" data-background-image="resources/coke-darken.jpg" data-background-position="center center" data-background-size="cover" -->
# I'd Like to Write the World Some Docs

Steve Grunwell
stevegrunwell@phpc.social

---

## What is Documentation?

Note:

Before we can talk about how to write good documentation, it's important to understand that there are two kinds of documentation we're going to talk about.

----

### Inline Documentation

* Documentation within the code itself <!-- .element: class="fragment" -->
* Describes what everything does, function inputs/outputs, etc. <!-- .element: class="fragment" -->
* Written for a developer audience <!-- .element: class="fragment" -->

Note:

Inline documentation is the code we write in the codebase itself, and where we describe what arguments are accepted by a function, how something works, and anything people need to know in order to integrate with our code.

----

### Inline Documentation

```php
/**
 * Add two numbers and produce the absolute value of the sum.
 *
 * @param int $a The first number.
 * @param int $b The second number.
 * @return int The absolute value of the sum of $a and $b.
 */
function absum($a, $b) {
	return abs($a + $b);
}
```

Note:

Here's a typical example of a DocBlock for a PHP function, which we'll look more at later.

----

### Inline Documentation

```php
/**
 * Definition for the Person class.
 *
 * @package MyPackage
 * @author  ACME, Inc.
 */

namespace ACME\MyPackage\Person;
```

Note:

File-level DocBlocks are also great to help people understand the context of a file, and are another form of inline documentation.

----

### External Documentation

* <!-- .element: class="fragment" --> Public-facing documentation
	* User guides
	* API documentation
* <!-- .element: class="fragment" --> Internal documentation
	* README files
	* Wikis

Note:

When the documentation isn't intermingled with the code — even if it co-exists in the repository — we refer to it as "external" documentation.

External documentation can take multiple forms, whether they're tutorials or guides to help users use your product or API documentation to help developers integrate with your service.

External documentation doesn't need to be public at all; maybe you have a README file in your repository or an internal wiki for your team. These locations still contain important pieces of knowledge.

---

## Why we Document

Note:

Now that we understand the "What" of documentation, let's take a look at the "Why". You might notice this will be a recurring theme in this talk :)

----

### For Others

> The greatest piece software in the world is one that someone can use.

Note:

This is the obvious answer, but it's an important point to reiterate. Our job is to write software that people can use, and that means making the barrier of entry as low as possible.

It doesn't matter if it's for end users or other engineers on your team, documentation exists to make other peoples' lives easier.

----

<!-- .slide: data-background-image="resources/rtfm.png" data-background-size="40% auto" -->

Note:

If you want to be an ass about it, writing documentation is also the only way you can smuggly tell a colleague to "Read the Fucking Manual", though I'd recommend against using those words.

----

### For Ourselves

* Help ourselves remember how and why something works <!-- .element: class="fragment" -->
* Catch issues with our approach before writing any code <!-- .element: class="fragment" -->
* Better documentation => fewer questions <!-- .element: class="fragment" -->


Note:

Of course, this doesn't mean we can't benefit ourselves from having good documentation. Documentation helps us remember how or why something works the way it does, and writing documentation just before we write the code can help us catch code smells before they stink up the codebase.

----

> "Documentation is a love letter that you write to your future self."<br>—Damian Conway

Note:

Damian Conway, Aussie member of the Perl community.

As it was pointed out to me on Twitter, bad documentation can also be hate-mail from previous developers, though that usually comes in the form of terrible architecture.

---

<!-- .slide: data-background-image="resources/westworld.jpg" -->

## The Anatomy of Good Documentation

Note:

Now that we've covered the what and why, let's talk about what takes documentation from subpar to spectacular.

----

### What, How, and Why?

> Good documentation will explain not only **what** something does, but **how** and **why**.

Note:

Documentation should answer three key questions:
1. What does it do?
2. How do I use it?
3. Why does it work the way it does.

----

### Documentation should be useful

This:<!-- .element: class="fragment" data-fragment-index="0" -->

```
/**
 * Handle Ajax requests for user profile data.
 *
 * The $_POST['fields'] key should contain a comma-separated list
 * of keys to retrieve. If left empty, the function will return an
 * array of all user profile fields.
 *
 * @return array An associative array of user profile fields,
 *               optionally filtered by $_POST['fields'].
 */
```
<!-- .element: class="fragment" data-fragment-index="0" -->

Not this:<!-- .element: class="fragment" data-fragment-index="1" -->

```
// Ajax stuff.
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Note:

We're not writing documentation for our health, it should have a purpose. Compare this documentation to what we often see, which tells us nothing.

----

### The Basic Structure

1. Summary <!-- .element: class="fragment" -->
2. Description <!-- .element: class="fragment" -->
3. Tags <!-- .element: class="fragment" -->

Note:

Regardless of the language, inline documentation generally follows this pattern:

1. Summary (one-line to explain what the function does)
2. Description (details about the implementation, optional)
3. Tags (special information about the code)

----

### PHPDoc

```
/**
 * This is the summary.
 *
 * The description can be much longer, and include
 * markdown for _emphasis!_
 *
 * @since 0.1.5
 *
 * @param string $var A description of var.
 *
 * @return string A description of the output.
 */
```

[phpdoc.org](https://phpdoc.org/)

Note:

In PHP, the common standard is PHPDoc, which looks like this.

It's not an official standard, but PSR-5 seeks to change that (though the PSR seems to have stalled).

----

### JSDoc

```
/**
 * This is the summary.
 *
 * The description can be much longer, and include
 * markdown for _emphasis!_
 *
 * @since 0.1.5
 *
 * @param {String} var A description of var.
 *
 * @return {String} A description of the output.
 */
```

[usejsdoc.org](http://usejsdoc.org/)

Note:

Syntax is extremely similar, and many tags are present in both standards.

@return == @returns

----

### Other languages

<table>
	<tbody>
		<tr>
			<th scope="row">Java</th>
			<td>Javadoc</td>
		</tr>
		<tr>
			<th scope="row">Python</th>
			<td>Docstrings, reStructuredText, Sphinx</td>
		</tr>
		<tr>
			<th scope="row">Ruby</th>
			<td>RDoc, SDoc</td>
		</tr>
		<tr>
			<th scope="row">Elixer</th>
			<td>ExDoc</td>
		</tr>
	</tbody>
</table>

Note:

Beyond PHP and JavaScript, many languages have official (or at least popular) documentation standards.

Different languages have different relationships and standards around documentation, but know that standards exist.

----

### "How do I use this?"

* Arguments <!-- .element: class="fragment" -->
* Output <!-- .element: class="fragment" -->
* Global variables <!-- .element: class="fragment" -->
* Side effects <!-- .element: class="fragment" -->

Note:

When writing documentation, consider a developer asking "how do I use this?". Would he/she have an answer by reading your docs?

4 items: arguments, output, global variables, and side effects

----

### Arguments

```
@param TYPE         NAME  DESCRIPTION
@param string       $name The user's first name.
@param int          $num  The number to add.
@param bool         $test Is this a test run?
@param array|string $args Either an array or query string of
                          additional arguments.
@param mixed        $data This argument could literally be anything.
                          Usually best to avoid.
```

Note:

The basic structure of function/method arguments in PHPDoc looks like this: @param, the type or types, the variable name, and a sentence or two describing what that argument represents.

----

#### Arguments: Arrays

```
/**
 * @param array $args {
 *   Additional arguments to pass to the query. All arguments
 *   are optional.
 *
 *   @var int    $limit   The maximum number of results.
 *                        Default is 10.
 *   @var string $orderby The column to sort results by.
 *                        Default is 'username'.
 *   @var string $order   Direction to sort the results.
 *                        Default is 'ASC'.
 * }
 */
```

Note:

Again, not a standard, but a common convention: @param, array, variable name, then open curly braces, to contain the details about the array.

Really useful when accepting arrays of arguments, like database query parameters.

----

###  Return Values

```
@return TYPE     DESCRIPTION
@return array    An array of query results.
@return bool     True if the record was updated, false if
                 something went wrong.
@return WP_Query The resulting WP_Query object.
```

```
@throws InvalidArgumentException if the provided argument is
                                 not of type 'array'.
```
<!-- .element: class="fragment" -->

Note:

We also want to document the type of output expected from our function.

If you're working with exceptions, it's also good to document the conditions that will trigger them.

----

### Link to relevant documentation

<dl>
	<dt class="fragment" data-fragment-index="0"><code>@see</code></dt>
	<dd class="fragment" data-fragment-index="0">Reference other pieces of code or a URI</dd>
	<dt class="fragment" data-fragment-index="1"><code>@link</code></dt>
	<dd class="fragment" data-fragment-index="1">Reference a URI</dd>
</dl>

Note:

In some situations, it's also helpful to link to other documentation, either internallly or externally.

GitHub READMEs, API docs, or other locations in the codebase.

---

## Generating Documentation

Note:

One of the coolest things you can do, assuming you've followed documentation standards, is to generate interactive docs automatically.

----

### Generate :allthethings:

* Well-formed inline docs can be compiled to create HTML documentation <!-- .element: class="fragment" -->
* <!-- .element: class="fragment" --> Great for internal teams, *fantastic* for open-source projects
* Examples: <!-- .element: class="fragment" -->
	* [WordPress Code Reference](https://developer.wordpress.org/reference/)
	* [Laravel API docs](https://laravel.com/api/5.4/)
	* [Read the Docs' documentation](http://docs.readthedocs.io/en/latest/) (yo dawg...)

Note:

When we're documenting often and to a standard, we're able to generate nice, user-friendly documentation as HTML or in other formats.

WordPress inline documentation efforts - arguments, return values, filters, the source itself, where the code lives, and anything else that calls it or the code depends on.

Laravel: not the main docs, but digging into things like Illuminate, HTTP, etc.

----

<!-- .slide: data-background-image="resources/phpdocumentor-clean.png" data-background-position="center center" data-background-size="contain" -->

Note:

Example generated by PHPDocumentor. List of all classes on the left, details about the Application Class in the center, including methods, properties, and constants.

Template can be totally customized, and several are available out of the box.

----

### Documentation Generators

<table>
	<thead>
		<tr>
			<th>Tools</th>
			<th>Services</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<p><a href="https://www.phpdoc.org">phpDocumentor</a><br>
				<a href="https://github.com/ApiGen/ApiGen">ApiGen</a><br>
				<a href="http://daux.io">Daux.io</a><br>
				<a href="http://usejsdoc.org">JSDoc</a></p>
			</td>
			<td>
				<p><a href="https://readthedocs.org/">Read the Docs</a><br>
				<a href="http://readme.io/">ReadMe</a><br>
				<a href="https://pages.github.com/">GitHub Pages</a></p>
			</td>
		</tr>
	</tbody>
</table>

Note:

In addition to PHPDocumentor, there are tools like ApiGen, Daux.io, and JSDoc that can compile docs locally — just point the tools at your source and let 'em go to work. These are often good to incorporate into a build tool like Jenkins or Travis, to ensure docs are built alongside your app.

Hosted options: Read the Docs, ReadMe, and GitHub Pages, which can be great if you need a place to publish docs offsite.

----

<!-- .slide: data-background-image="resources/read-the-docs.jpg" data-background-size="cover" data-background-position="center top" -->

Note:

Example of Read the Docs' UI.

---

##  Writing the Best Documentation

Note:

Now that you have a sense of the tools and standards out there, I'd like to share a few tips on writing the best documentation you can.

----

### When do I write documentation?

* As — or even before — you write your code <!-- .element: class="fragment" -->
* When questions are raised or bugs found <!-- .element: class="fragment" -->
* When refactoring <!-- .element: class="fragment" -->
* Whenever documentation is insufficient <!-- .element: class="fragment" -->

Note:

Ideally, documentation should be written before you write any code. This forces you to think about your approach, and sometimes saying it out loud (or typing it) can help you catch logical errors.

If bugs or stress-cases are found, make sure these are documented!

When refactoring code, make sure the documentation stays up-to-date.

If you find yourself having to read the code to figure out what a function does, that's a sign that the documentation isn't doing it's job. Take what you've learned and write it down!

----

### Make documentation part of code review

* Code changes should always include relevant changes to documentation <!-- .element: class="fragment" -->
* Forces team to write docs for new features <!-- .element: class="fragment" -->
* Protects documentation from falling behind <!-- .element: class="fragment" -->

Note:

A practice I love to see is making documentation part of code review

New arguments added but not documented? No documentation for new functionality? Send it back!

----

### Be careful about your assumptions

* Don't assume intimate knowledge <!-- .element: class="fragment" -->
* Link to relevant docs <!-- .element: class="fragment" -->

Note:

It's important to write our documentation in a way that we're not assuming the reader has intimate knowledge of the entire codebase. We don't want to talk-down, either, but imagine the person understands the language but only has high-level knowledge of the concept.

If additional information is necessary, point people in the right direction.

----

### Generate documentation regularly

* Coverage <!-- .element: class="fragment" -->
* Detect duplication or spaghetti code <!-- .element: class="fragment" -->

Note:

Even if your codebase isn't being distributed, regularly generating documentation can have some benefits:

Generated docs will help highlight areas of the codebase that don't have documentation and could benefit from more attention. PHPDocumentor includes reports for areas that are either missing or don't have sufficient coverage.

Getting a high-level view of your app can also help you recognize possible code organization issues and find things like duplicated functionality or features you had forgotten about.

----

### Is your code hard to document?

![Poop emoji](resources/poop.png) <!-- .element: class="fragment poop" -->

Note:

If your code can't be documented easily, that could be a sign that your code is poorly organized or overly complex. That's what we like to call a code smell.

----

### Learn the standards used by your project

Note:

While PHPDoc is pretty common, different projects may have different conventions for things like alignment, phrasing, or the handling of certain tags.

For example, WordPress asks that you *not* use `@return void` — if there's no return, omit the DocBlock tag.

Knowing the conventions used by your project will make documentation far less painful.

----

### Writing documentation is a great first step into an open-source project

Note:

If you're looking for ways to get move involved with a project, writing documentation is a great first step, as it's an area where a lot of projects need serious help.

Writing documentation forces you to understand the code better, helps other people, and is very likely to be accepted and greatly appreciated.

---

## Thank You!

Steve Grunwell<br>
[stevegrunwell.com](https://stevegrunwell.com)<br>
[liquidweb.com](https://www.liquidweb.com/)

[stevegrunwell.com/slides/write-some-docs](https://stevegrunwell.com/slides/write-some-docs)<!-- .element: class="slides-link" -->
