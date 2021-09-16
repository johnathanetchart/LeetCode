# Write your MySQL query statement below
SELECT p1.FirstName, p1.LastName, p2.City, p2.State
FROM Person AS p1 LEFT JOIN Address AS p2
ON p1.PersonId = p2.PersonId;