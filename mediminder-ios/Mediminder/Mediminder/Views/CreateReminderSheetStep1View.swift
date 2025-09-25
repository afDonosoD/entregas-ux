//
//  CreateReminderSheetStep1View.swift
//  Mediminder
//
//  Created by Germán Martínez Solano on 24/09/25.
//

import SwiftUI

struct CreateReminderSheetStep1View: View {
    @Binding var medicine: String
    @Binding var quantity: String
    @Binding var measure: String
    var onCancel: () -> Void
    var onNext: () -> Void
	var onCreate: () -> Void
    
    let hoursBinding = Binding.constant([
        "9:00 am",
        "10:00 am",
        "11:00 am"
    ])
    
    let hoursAndDaysData = [
        (1, "9:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ]),
        (2, "10:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ]),
        (3, "11:00 am", [
            (1, "L", true),
            (2, "M", true),
            (3, "M", false),
            (4, "J", false),
            (5, "V", true),
            (6, "S", true),
            (7, "D", true)
        ])
    ]
    
    var body: some View {
        NavigationStack {
            GeometryReader { geometry in
                VStack(spacing: 0) {
                    ScrollView {
                        VStack(spacing: 24) {
                            Group {
                                Text("¿Cuál es la medicina?")
                                    .font(.headline)
                                    .frame(maxWidth: .infinity, alignment: .center)
                                
                                TextField("E.g. Salbutamol", text: $medicine)
                                    .textFieldStyle(.plain)
                                    .padding()
                                    .background(Color(.secondarySystemBackground))
                                    .cornerRadius(12)
                                    .padding(.horizontal, 50)
                            }
                            
                            Group {
                                Text("¿Cuál es la dosis?")
                                    .font(.headline)
                                    .frame(maxWidth: .infinity, alignment: .center)
                                
                                Text("Cantidad")
                                    .frame(maxWidth: .infinity, alignment: .leading)
                                    .padding(.horizontal, 50)
                                
                                TextField("E.g. 1, 5, 100", text: $quantity)
                                    .textFieldStyle(.plain)
                                    .keyboardType(.decimalPad)
                                    .padding()
                                    .background(Color(.secondarySystemBackground))
                                    .cornerRadius(12)
                                    .padding(.horizontal, 50)
                                
                                Text("Medida")
                                    .frame(maxWidth: .infinity, alignment: .leading)
                                    .padding(.horizontal, 50)
                                
                                TextField("E.g. pastillas, gotas, mL", text: $measure)
                                    .textFieldStyle(.plain)
                                    .padding()
                                    .background(Color(.secondarySystemBackground))
                                    .cornerRadius(12)
                                    .padding(.horizontal, 50)
                            }
                        }
                        .frame(minHeight: geometry.size.height * 0.85)
                        .frame(maxWidth: .infinity, alignment: .center)
                    }
                    
                    HStack {
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
                        
                        NavigationLink (destination: CreateReminderSheetStep2View(
                            hours: hoursBinding,
                            hoursAndDays: hoursAndDaysData,
                            onCancel: onCancel,
                            onNext: { },
							onCreate: onCreate
                        )) {
                            Text("Siguiente")
                                .frame(maxWidth: .infinity)
                                .padding()
                                .foregroundColor(.white)
                                .background(Color(.primary))
                                .cornerRadius(50)
                        }
                    }
                    .padding()
                    .background(Color(.systemBackground))
                }
            }
            .navigationTitle("")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
				ToolbarItem(placement: .principal) {
					Text("Crear Recordatorio")
						.customSuperSmall()
				}
				
                ToolbarItem(placement: .cancellationAction) {
                    Button(role: .cancel) {
                        onCancel()
                    } label: {
                        Image(systemName: "xmark")
                    }
                }
            }
        }
    }
}

#Preview {
    StatefulPreviewWrapper((
        "Acetaminofén",
        "3",
        "mL"
    )) { medicine, quantity, measure in
        CreateReminderSheetStep1View(
            medicine: medicine,
            quantity: quantity,
            measure: measure,
            onCancel: {},
            onNext: {},
			onCreate: {}
        )
    }
}

struct StatefulPreviewWrapper<T1, T2, T3, Content: View>: View {
    @State var value1: T1
    @State var value2: T2
    @State var value3: T3
    var content: (Binding<T1>, Binding<T2>, Binding<T3>) -> Content
    
    init(_ value: (T1, T2, T3), content: @escaping (Binding<T1>, Binding<T2>, Binding<T3>) -> Content) {
        self._value1 = State(initialValue: value.0)
        self._value2 = State(initialValue: value.1)
        self._value3 = State(initialValue: value.2)
        self.content = content
    }
    
    var body: some View {
        content($value1, $value2, $value3)
    }
}
