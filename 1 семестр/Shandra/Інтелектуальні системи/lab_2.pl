parent('Igor', 'Maryna').
parent('Igor', 'Viktor').
parent('Galyna', 'Maryna').
parent('Galyna', 'Viktor').
parent('Oleksandr', 'Taya').
parent('Oleksandr', 'Maryana').
parent('Nina', 'Taya').
parent('Nina', 'Maryana').
parent('Viktor', 'Stanislav').
parent('Viktor', 'Myroslav').
parent('Taya', 'Stanislav').
parent('Taya', 'Myroslav').
parent('Myroslav', 'Taras').
parent('Myroslav', 'Pavlo').
parent('Chrystyna', 'Taras').
parent('Chrystyna', 'Pavlo').
parent('Matvii', 'Chrystyna').
parent('Svitlana', 'Chrystyna').

male('Igor').
male('Viktor').
male('Oleksandr').
male('Stanislav').
male('Myroslav').
male('Taras').
male('Pavlo').
male('Matvii').

female('Maryna').
female('Galyna').
female('Taya').
female('Maryana').
female('Chrystyna').
female('Svitlana').
female('Nina').

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
