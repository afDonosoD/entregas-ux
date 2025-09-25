//
//  DaysView.swift
//  Mediminder
//
//  Created by Germán Martínez Solano on 24/09/25.
//

import SwiftUI

struct DaysView: View {
    let days: [(id: Int, dayName: String, colored: Bool)]
    let showDeleteButton: Bool  // 👈 nuevo parámetro
    
    var body: some View {
        HStack(alignment: .center) {
            ForEach(days, id: \.id) { day in
                ZStack(alignment: .center) {
                    Ellipse()
                        .frame(width: 30, height: 30)
                        .foregroundStyle(
                            day.colored ? Color.accentColor : Color(.secondaryLight)
                        )
                    
					Text(day.dayName)
						.foregroundStyle(.white)
                }
                
                Spacer()
            }
            
            if showDeleteButton {
                Button(action: {
                    print("Botón adicional presionado")
                }) {
                    Image(systemName: "minus.circle.fill")
                        .resizable()
                        .frame(width: 20, height: 20)
                        .foregroundStyle(.danger)
                }
            }
        }
        
    }
}

#Preview() {
    DaysView(days: [
        (1, "L", true),
        (2, "M", true),
        (3, "M", false),
        (4, "J", false),
        (5, "V", true),
        (6, "S", true),
        (7, "D", true)
    ], showDeleteButton: true).padding()
}
