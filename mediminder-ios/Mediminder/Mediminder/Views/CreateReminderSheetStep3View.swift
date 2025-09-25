//
//  CreateReminderSheetStep2View.swift
//  Mediminder
//
//  Created by Germán Martínez Solano on 24/09/25.
//

import SwiftUI

struct CreateReminderSheetStep3View: View {
	let schedule:
	[(time: String, days: [(id: Int, dayName: String, colored: Bool)])] = [
		(
			"9:00 a.m.",
			[
				(1, "L", true),
				(2, "M", true),
				(3, "M", false),
				(4, "J", false),
				(5, "V", true),
				(6, "S", true),
				(7, "D", true),
			],
		),
		(
			"10:00 a.m.",
			[
				(1, "L", true),
				(2, "M", true),
				(3, "M", false),
				(4, "J", false),
				(5, "V", true),
				(6, "S", true),
				(7, "D", true),
			],
		),
		(
			"11:00 a.m.",
			[
				(1, "L", true),
				(2, "M", true),
				(3, "M", false),
				(4, "J", false),
				(5, "V", true),
				(6, "S", true),
				(7, "D", true),
			],
		),
	]
    
    var onCancel: () -> Void
    var onCreate: () -> Void
    
    
    var body: some View {
		NavigationStack {
			GeometryReader { proxy in
				VStack(alignment: .leading, spacing: 30) {
					Spacer()
					
					HStack {
						Spacer()
						
						Text("Confirma la información")
							.customBody()
							.fontWeight(.bold)
						
						Spacer()
					}
					
					VStack(alignment: .leading, spacing: 8) {
						Text("Nombre")
							.customBody()
							.fontWeight(.bold)
						
						Text("Acetaminofén")
					}
					
					VStack(alignment: .leading, spacing: 8) {
						Text("Dosis")
							.customBody()
							.fontWeight(.bold)
						
						Text("1 pastilla")
					}
					
					VStack(alignment: .leading, spacing: 8) {
						Text("Horario")
							.customBody()
							.fontWeight(.bold)
						
						Grid(alignment: .leading, verticalSpacing: 16) {
							GridRow {
								Text("Hora")
								
								Text("Dias")
							}
							
							ForEach(schedule, id: \.time) { scheduleItem in
								GridRow {
									Text(scheduleItem.time)
									
									DaysView(
										days: scheduleItem.days,
										showDeleteButton: false
									)
								}
							}
						}
					}  //: Schedule VStack
					
					Spacer()
					
					HStack(spacing: 16) {
						Button(role: .cancel) {
							onCancel()
						} label: {
							Text("Regresar")
								.frame(maxWidth: .infinity)
								.padding()
								.foregroundColor(.black)
								.background(Color(.secondaryLight))
								.cornerRadius(50)
						}
						
						Button {
							onCreate()
						} label: {
							Text("Crear recordatorio")
								.frame(maxWidth: .infinity)
								.padding(.vertical, 0)
								.padding(.horizontal, 16)
								.foregroundColor(.white)
						}
						.frame(height: 50)
						.background(Color(.primary))
						.cornerRadius(50)
					}
					.padding()
					.background(Color(.systemBackground))
				}  //: VStack
				.padding(.horizontal, 25)
				
			}  //: GeometryReader
			.navigationTitle("")
			.navigationBarTitleDisplayMode(.inline)
			.toolbar {
				ToolbarItem(placement: .principal) {
					Text("Crear Recordatorio")
						.customSuperSmall()
				}
				
				ToolbarItem(placement: .destructiveAction) {
					Button(role: .cancel) {
						onCancel()
					} label: {
						Image(systemName: "xmark")
					}
				}
			}
		} //: NavigationStack
    }
}

#Preview {
    CreateReminderSheetStep3View(
        onCancel: {},
        onCreate: {}
    )
}
