//
//  CalendarView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI

struct CalendarView: View {
	let days: [(dayNumber: Int, dayName: String)] = [
		(8, "L"),
		(9, "M"),
		(10, "M"),
		(11, "J"),
		(12, "V"),
		(13, "S"),
		(14, "D")
	]
	
    var body: some View {
		HStack(alignment: .center) {
			Spacer()
			
			ForEach(days, id: \.dayNumber) { day in
				VStack(alignment: .center) {
					Ellipse()
						.frame(width: 30, height: 30)
						.foregroundStyle(.secondaryLight)
					Text("\(day.0)")
					Text(day.1)
				}
				Spacer()
			}
		}
    }
}

#Preview(traits: .sizeThatFitsLayout) {
    CalendarView()
		.padding()
}
