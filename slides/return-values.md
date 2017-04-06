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