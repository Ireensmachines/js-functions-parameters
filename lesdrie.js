const wagePerVisit = 50

// Create visitor tracker
function trackVisitor( visitor, visits ) {

    if( visitor.role == 'employee' ) {
        visitor.wages += ( visits * wagePerVisit )
    } else {
        visitor.bill += ( visits * wagePerVisit * 2 )
    }

}

// People
const derpina = { role: 'employee', wages: 0 }
const derp = { bill: 0 }

// Track a few visitors
trackVisitor( derpina, 2 )
trackVisitor( derp, 5 )
trackVisitor( derpina 4 )
trackVisitor( derp 2 )

// Log out the result
console.log( 'Derpina result: ', derpina )
console.log( 'Derp result: ', derp )