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