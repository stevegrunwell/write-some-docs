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
