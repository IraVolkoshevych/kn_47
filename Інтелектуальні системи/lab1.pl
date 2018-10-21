parent('Yaroslav', 'Maryna').
parent('Yaroslav', 'Volodymyr').
parent('Hanna', 'Maryna').
parent('Hanna', 'Volodymyr').
parent('Oleksiy', 'Tetiana').
parent('Natalia', 'Tetiana').
parent('Oleksiy', 'Svitlana').
parent('Natalia', 'Svitlana').
parent('Volodymyr', 'Borys').
parent('Tetiana', 'Borys').
parent('Volodymyr', 'Sviatoslav').
parent('Tetiana', 'Sviatoslav').
parent('Mykhailo', 'Khrystyna').
parent('Olha', 'Khrystyna').
parent('Sviatoslav', 'Serhiy').
parent('Sviatoslav', 'Glib').
parent('Khrystyna', 'Serhiy').
parent('Khrystyna', 'Glib').

male('Yaroslav').
male('Volodymyr').
male('Oleksiy').
male('Borys').
male('Sviatoslav').
male('Mykhailo').
male('Serhiy').
male('Glib').

female('Maryna').
female('Hanna').
female('Tetiana').
female('Natalia').
female('Svitlana').
female('Khrystyna').
female('Olha').

father( X, Y) :-  parent( X, Y), male(X).
mother( X, Y) :- parent( X, Y), female(X).
son(Y, X) :-  parent( X, Y), male(Y).
daughter(Y, X) :- parent( X, Y), female(Y).
sister( X, Y) :- parent( Z, X), parent( Z, Y), female(X), X\==Y.
brother( X, Y) :- parent( Z, X), parent( Z, Y), male(X), X\==Y.
grandfather( X, Z) :- parent( X, Y), parent( Y, Z), male(X).
grandmother( X, Z) :- parent( X, Y), parent( Y, Z), female(X).
grandson( Z, X) :- parent( X, Y), parent( Y, Z), male(Z).
granddaughter(Z, X) :- parent( X, Y), parent( Y, Z), female(Z).
aunt(X, Y) :- parent(Z, Y), sister(X, Z).
uncle(X, Y) :- parent(Z, Y), brother(X, Z).
nephew(X, Y) :-  parent(Z, X), (brother(Z, Y); sister(Z, Y)), male(X).
niece(X, Y) :- parent(Z, X), (brother(Y, Z);sister(Y, Z)), female(X).

isParentAndHasParent(X) :- parent(X, Y), parent(Z,X).
hasChildren(X) :- parent(X, Y).
hasNoChildren(X) :- \+ hasChildren(X).